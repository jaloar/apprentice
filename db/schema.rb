# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160922234940) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "answers", force: :cascade do |t|
    t.string   "index"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string   "question"
    t.string   "answer"
  end

  create_table "how_to_content_translations", force: :cascade do |t|
    t.integer  "how_to_content_id"
    t.string   "locale"
    t.string   "title"
    t.text     "description"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "how_to_contents", force: :cascade do |t|
    t.integer  "section_id"
    t.integer  "position",   default: 0
    t.boolean  "active",     default: true
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "how_to_section_translations", force: :cascade do |t|
    t.integer  "how_to_section_id"
    t.string   "locale"
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "how_to_sections", force: :cascade do |t|
    t.integer  "parent_id"
    t.boolean  "active",             default: true
    t.integer  "sub_sections_count", default: 0
    t.integer  "contents_count",     default: 0
    t.integer  "position",           default: 0
    t.integer  "lft"
    t.integer  "rgt"
    t.integer  "depth"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
