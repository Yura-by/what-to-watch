import {Operation, ActionType} from './data';
import createAPI from '../../api';
import MockAdapter from 'axios-mock-adapter';

it(`Operation sendComment works correctly`, () => {
  const mockRequireAuth = jest.fn();
  const api = createAPI(mockRequireAuth);

  const apiMock = new MockAdapter(api);

  const mockDispatch = jest.fn();
  const mockGetState = jest.fn();

  apiMock
    .onPost(`/comments/2`)
    .reply(200, [{fake: true}]);

  return Operation.sendComment(2, {
      comment: ``,
      rating: 1,
    })(mockDispatch, mockGetState, api)
    .then(() => {
      expect(mockDispatch).toHaveBeenCalledTimes(4);
      expect(mockDispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.SET_IS_SENDING_COMMENT,
        payload: true,
      });
      expect(mockDispatch).toHaveBeenNthCalledWith(2, {
        type: ActionType.SET_IS_SENDING_COMMENT,
        payload: false,
      });
      expect(mockDispatch).toHaveBeenNthCalledWith(3, {
        type: ActionType.SET_IS_BAD_SENT_COMMENT,
        payload: false,
      })
    })
});

it(`Operation sendComment works correctly when response 400`, () => {
  const mockRequireAuth = jest.fn();
  const api = createAPI(mockRequireAuth);

  const apiMock = new MockAdapter(api);

  const mockDispatch = jest.fn();
  const mockGetState = jest.fn();

  apiMock
    .onPost(`/comments/2`)
    .reply(400, [{fake: true}]);

  return Operation.sendComment(2, {
      comment: ``,
      rating: 1,
    })(mockDispatch, mockGetState, api)
    .then(() => {
      expect(mockDispatch).toHaveBeenCalledTimes(3);
      expect(mockDispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.SET_IS_SENDING_COMMENT,
        payload: true,
      });
      expect(mockDispatch).toHaveBeenNthCalledWith(2, {
        type: ActionType.SET_IS_SENDING_COMMENT,
        payload: false,
      });
      expect(mockDispatch).toHaveBeenNthCalledWith(3, {
        type: ActionType.SET_IS_BAD_SENT_COMMENT,
        payload: true,
      });
    })
});
