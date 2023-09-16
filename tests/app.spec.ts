import { HelloWorld } from '../src/app';

describe('App', () => {
  it('should create the app', () => {
    const app = new HelloWorld();
    app.sayHello('Test Project is running!');
    expect(app).toBeTruthy();
  });
});
