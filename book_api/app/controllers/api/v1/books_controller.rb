class Api::V1::BooksController < ApplicationController
  def index
    render json: books
  end

  def create
    Book.create!(book_params)
    $redis.del('books')
  end

  private

  def books
    @books ||= $redis.get('books') || fetch_books
  end

  def fetch_books
    books = Book.all.order(created_at: :desc).to_json
    $redis.set('books', books)
    books
  end

  def book_params
    params.require(:book).permit(:title, :url, :comment)
  end
end
