import * as React from 'react';
import {connect} from 'react-redux';
import {Store} from '../../types';
import {URL} from '../../const';
import Logo from '../logo/logo';

import {getUserAvatar} from '../../reducer/user/selectors';

interface Props {
  avatar: string;
}

const Header: React.FunctionComponent<Props> = (props: Props) => {
  const {avatar} = props;
  return (
    <header className="page-header movie-card__head">
      <Logo />

      <div className="user-block">
        {avatar
          ? <div className="user-block__avatar">
          <img src={`${URL.DOMEN}${avatar}`} alt="User avatar" width="63" height="63" />
        </div>
          : <a href="sign-in.html" className="user-block__link">Sign in</a>
        }

      </div>
    </header>
  );
};

const mapStateToProps = (state: Store) => {
  return {
    avatar: getUserAvatar(state)
  }
}

export default connect(mapStateToProps)(Header);
