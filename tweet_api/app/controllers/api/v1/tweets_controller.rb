class Api::V1::TweetsController < ApplicationController
  def index
    render json: tweets.order(created_at: :desc)
  end

  def create
    Tweet.create!(tweet_params)
  end

  private

  def tweets
    @tweets ||= Tweet.all
  end

  def tweet_params
    params.require(:tweet).permit(:context)
  end
end
