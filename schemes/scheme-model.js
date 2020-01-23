const db = require("../data/dbConfig.js");

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove,
    // addStep
}

function find() {
    return db("schemes")
}

function findById(id) {
    return db("schemes")
    .where({id})
    .first()
}

function findSteps(id) {
    return db("schemes")
    .join("steps", "schemes.id", "steps.scheme_id")
    .select("steps.id","schemes.scheme_name", "steps.step_number", "steps.instructions")
    .where(".steps.scheme_id", id);
}

function add(scheme) {
    return db("schemes")
      .insert(scheme)
      .then(ids => {
        return findById(ids[0]);
      });
  }

  function update(changes, id) {
    return db("schemes")
      .where({ id })
      .update(changes);
  }

  function remove(id) {
    return db("schemes")
      .where("id", id)
      .del();
  }

  function addStep(step, scheme_id) {
    return db("steps")
    .insert({ ...step, scheme_id })
    .then(arrId => {
        return db("steps")
        .where({ id: arrId[0] })
        .first()
        .then(newStep => newStep)
    })
}