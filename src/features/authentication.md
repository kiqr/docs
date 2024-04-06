# Authentication

**KIQR** uses [Devise](https://github.com/heartcombo/devise) for authentication. Devise is a flexible authentication solution for Rails based on Warden. It is composed of 10 modules:

- **Authenticatable**: responsible for encrypting password and validating authenticity of a user while signing in.
- **Confirmable**: responsible for verifying whether an account is already confirmed during sign in.
- **Recoverable**: takes care of reseting the user password and send reset instructions.
- **Registerable**: handles all aspects related to user registration.
- **Rememberable**: manages generating and clearing token for remember the user from a saved cookie.
- **Trackable**: tracks sign in count, timestamps and IP address.
- **Timeoutable**: expires sessions that have not been active in a specified period of time.
- **Validatable**: provides validations of email and password. It's optional and can be customized.
- **Lockable**: locks an account after some failed sign in attempts.

## Configuration

To configure Devise, you can edit the `config/initializers/devise.rb` file. Here you can change the default settings for each module.

Remember to restart your server after changing the configuration.

Read more about Devise configuration [here](https://github.com/heartcombo/devise/wiki/How-Tos).

## Theming

Devise views are located in the `app/views/users` directory. Here you can customize the views to match your project's design.
