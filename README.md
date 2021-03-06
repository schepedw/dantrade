## DanTrade

A brief foray into front end development, used for workshops at Enova 1/20/15, 3/24/15

###Tools
* Bootstrap
* jQuery
* fontAwesome
* sass
* cucumber

###API
/compare.json?ticker#xxxx

This api is used by the front end. aJax -> api ->dev.markitondemand.com/Api/v2/Quote/json

Having ajax call this api rather than markitondemand allows me to get around markitondemand not implementing [cors](http://enable-cors.org/)

###Testing
[Cucumber](https://cukes.info/) is used for testing this app.

####Setup
You should only need to run the following two lines.
```
  bundle install
  rake cucumber
```
#####Setup (more detail)
__This has already been done for you. It's only explained here for reference.__

rspec-rails and cucumber-rails are the gems used for testing

To utilize them, add the following the Gemfile
```
  group :test do
    gem 'rspec-rails'
    gem 'cucumber-rails'
  end
```
Then run `bundle install`

Since this particular app doesn't have a DB, we will install cucumber with the `--skip-database` flag.
Learn more about cucumber install flags with `rails generate cucumber:install --help`

`bundle exec rails generate cucumber:install --skip-database`

Then delete the following in `features/support/env.rb`
```
  begin
    DatabaseCleaner.strategy # :transaction
  rescue NameError
    raise "You need to add database_cleaner to your Gemfile (in the :test group) if you wish to use it."
  end
```
You should be ready to write some tests! Test by running `rake cucumber`
