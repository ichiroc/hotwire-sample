class Room < ApplicationRecord
  has_many :messages
  broadcasts
  validates :name, presence: true
end
