# Accounts

KIQR features multi-user capabilities, accommodating both individual and team or organization accounts through the `Account` model. This setup allows a user to be linked with multiple accounts and vice versa, including a personal account automatically established upon user creation.

Such design ensures our system operates uniformly, irrespective of whether resources are allocated to individual users or teams/organizations. Initially, users are guided to an onboarding page to set up their personal account upon their first login.

## Accessing the current account

The `current_account` helper enables access to the active account within controllers and views, facilitating the management of resources like projects specific to the current account context.

```ruby
class ProjectsController < ApplicationController
  def index
    @projects = current_account.projects
  end
end
```

## Resource scoping

We highly advocate for scoping all resources owned by users under accounts, rather than directly to users. For example, in applications featuring projects, the Project model should reference an account (be it personal or team-oriented) rather than a user directly.

```ruby
class Project < ApplicationRecord
  # belongs_to :user <- don't do this.
  belongs_to :account # personal or team account.
end
```

Alternatively, for those utilizing [acts_as_tenant](https://github.com/ErwinM/acts_as_tenant) for multi-tenancy:

```ruby
class Project < ApplicationRecord
  acts_as_tenant :account
end
```

## Account switching

Users have the flexibility to switch between their personal and other associated accounts. This is controlled by the `account_id` parameter in the URL, defaulting to the user's personal account when absent. Ensure all account-scoped routes include the `:account_id` prefix to facilitate this.

For instance:

```ruby
# Routes within this block are prefixed with /team/<account_id> when
# logged into a team account, or remain unprefixed for personal accounts.
scope "(/team/:account_id)", account_id: %r{[^/]+} do
  get "dashboard" => "dashboard#show"
  resources :projects
end
```

This setup generates URLs like `/team/1/projects` for team account resources and `/projects` for personal account resources, with the `projects_path` helper automatically aligning URLs with the current account in views and controllers.
