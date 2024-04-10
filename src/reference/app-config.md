# Application config

Kiqr allows you to personalize your application through various configuration options. Set up your application's name, email settings, and locale preferences by adjusting the Kiqr configuration.

## Basic configuration

To configure your Kiqr application, edit the initializer file typically found at `config/initializers/kiqr.rb`. If this file does not exist, you might need to create it.

```ruby
Kiqr::Config.configure do |config|
  # Application name
  config.app_name = "My Application"

  # From email
  config.default_from_email = "your-email@example.com"

  # Locales
  config.available_locales = [:en, :sv] # Add or remove locale symbols as needed
  config.default_locale = :en
end
```

## Configuration options

- **app_name:** Sets the application name. This name appears in the meta title and various places within the application for branding.
- **default_from_email:** Sets the default email address for sending emails from the application. It’s crucial to change this to a real email address you control. This address may be overridden if you use a custom mailer class.
- **available_locales:** An array of locale symbols that are available for the application. Kiqr uses this list to determine which locales are available for the user to select. This helps in validating the user’s locale preference.
- **default_locale:** The default locale for the application. If a user’s locale is not set, this locale is used as the default.

## Example

Here's an example of how you might configure a bilingual application:

```ruby
Kiqr::Config.configure do |config|
  config.app_name = "My Bilingual App"
  config.default_from_email = "support@myapp.com"
  config.available_locales = [:en, :es]
  config.default_locale = :en
end
```

Adjust the configuration to suit the needs of your application, such as adding additional locales or changing the application name for different environments.
