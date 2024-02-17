class Book
  include Mongoid::Document
  include Mongoid::Timestamps
  field :title, type: String
  field :url, type: String
  field :comment, type: String
end
