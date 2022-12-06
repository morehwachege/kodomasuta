class CreateTechnicalMentors < ActiveRecord::Migration[6.1]
  def change
    create_table :technical_mentors do |t|

      t.timestamps
    end
  end
end
