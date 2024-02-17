Rails.application.routes.draw do
  namespace :api, api_version: 'v1' do
    namespace :v1 do
      resources :books, only: %i[index create]
    end
  end
end
