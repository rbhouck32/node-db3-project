// scheme-model
const db = require("../../data/db-config.js");

//  FIND ALL SCHEMES
function find() {
  return db("schemes");
}

// FIND SCHEME BY SPECIFIC ID
function findById(id) {
  return db("schemes").where({ id }).first();
}

function findSteps(id) {
  return db("schemes as s")
    .join("steps as st", "s.id", "st.scheme_id")
    .select("st.id", "s.scheme_name", "st.step_number", "st.instructions")
    .where({ scheme_id: id });
}

// ADD A NEW SCHEME
function add(schemeData) {
  return db("schemes").insert(schemeData);
}

// UPDATE AN EXISTING SCHEME
function update(changes, id) {
  return db("schemes").where({ id }).update(changes);
}

// DELETE A SCHEME WITH SPECIFIED ID
function remove(id) {
  return db("schemes").where({ id }).del();
}

module.exports = {
  find,
  findById,
  add,
  update,
  remove,
  findSteps,
};
