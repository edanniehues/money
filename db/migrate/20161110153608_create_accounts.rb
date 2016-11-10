class CreateAccounts < ActiveRecord::Migration[5.0]
  def change
    create_table :accounts do |t|
      t.string :name
      t.integer :expiration_day
      t.integer :type
      t.integer :closing_day
      t.decimal :interest, precision: 8, scale: 4
      t.decimal :fine, precision: 8, scale: 2

      t.timestamps
    end
  end
end
