class User < ApplicationRecord
  has_secure_password

  # validations
  validates :email, presence: true, uniqueness: true, format: { with: /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i, message: "must be a valid email address" }
  validates :password, presence: true, format: { with: /\A(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}\z/,
  message: "must contain at least 1 uppercase letter, 1 numeric character, 1 special character, and must be 6 characters in length" }
end
