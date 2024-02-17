class Api::V1::BooksController < ApplicationController
  def index
    render json: books
  end

  def create
    Book.create!(book_params)
  end

  private

  def books
    @books ||= Book.all
  end

  def book_params
    params.require(:book).permit(:title, :url, :comment)
  end
end
