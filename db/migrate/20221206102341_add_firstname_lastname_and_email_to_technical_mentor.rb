class AddFirstnameLastnameAndEmailToTechnicalMentor < ActiveRecord::Migration[6.1]
  def change
    add_column :technical_mentors, :TechnicalMentor, :string
    add_column :technical_mentors, :firstname, :string
    add_column :technical_mentors, :lastname, :string
    add_column :technical_mentors, :email, :string
  end
end
