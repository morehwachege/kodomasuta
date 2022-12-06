class AddFirstnameLastnameAndEmailToStudent < ActiveRecord::Migration[6.1]
  def change
    add_column :students, :firstname, :string
    add_column :students, :lastname, :string
    add_column :students, :email, :string
  end
end
