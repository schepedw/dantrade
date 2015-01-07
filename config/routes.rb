Rails.application.routes.draw do
  root 'landing#compare'
  get '/compare' => 'landing#compare'
end
