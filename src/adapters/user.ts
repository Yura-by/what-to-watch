class User {
  id: number;
  email: string;
  name: string;
  avatarUrl: string;

  constructor(raw) {
    this.id = raw.id;
    this.email = raw.email;
    this.name = raw.name;
    this.avatarUrl = raw.avatar_url;
  }
}

export default User;
