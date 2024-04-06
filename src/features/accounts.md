# Accounts

KIQR comes with multi-user accounts (teams/organizations). Teams are represented by the `Account` model. An account can have multiple users associated with it and a user can have multiple accounts. All users also have a personal account which is created when the user is created.

This allows our code to work the same way whether we are adding resources privately for a user or for a team/organization. When a user signs in for the first time, they will be redirected to the onboarding page and prompted to create their personal account.

## Scoping resources

We **strongly recommend** you to scope all user owned resources under accounts instead of users. For example, in an application containing projects, the Project model could be declared like this:

```ruby
class Project < ApplicationRecord
  # belongs_to :user <- don't do this.
  belongs_to :account # personal or team account.
end
```

or if you are using [acts_as_tenant](https://github.com/ErwinM/acts_as_tenant) for multi-tenancy:

```ruby
class Project < ApplicationRecord
  acts_as_tenant :account
end
```

## Access the current account

The current account can be accessed through the `current_account` method. This method is available in controllers and views.

```ruby
class ProjectsController < ApplicationController
  def index
    @projects = current_account.projects
  end
end
```

## Switching accounts

Users can switch between their personal account and other accounts they are associated with. The current account is determined by the `account_id` parameter in the URL. If no parameter is present, the current account will be the user's personal account. For this to work, all routes that are scoped under accounts should be prefixed with the `:account_id`.

For example:

```ruby
# Routes inside this block will be prefixed with /team/<account_id> if
# the user is signed in to a team account. Otherwise, they won't be prefixed at all.
scope "(/team/:account_id)", account_id: %r{[^/]+} do
  get "dashboard" => "dashboard#show"
  resources :projects
end
```

This enables URLs like `/team/1/projects` to show projects for the team with ID 1 and `/projects` to show projects for the user's personal account. Use the `projects_path` helper in your views and controllers, and Rails will automatically generate the correct URL based on the current account.
