class CreateAssessments < ActiveRecord::Migration[6.1]
  def change
    create_table :assessments do |t|
      t.string :title
      t.integer :category_id
      t.text :description
      t.integer :technical_mentor_id

      t.timestamps
    end
  end
end
