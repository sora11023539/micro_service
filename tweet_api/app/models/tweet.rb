class Tweet
  include Mongoid::Document
  include Mongoid::Timestamps
  field :context, type: String
end
