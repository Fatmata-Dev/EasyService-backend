const mongoose = require("mongoose"); 

const SchemaDemande = new mongoose.Schema({
    titre: {
        type: String,
        required: true,
        trim: true
    },
    statut: {
        type: String,
        enum: ["en_attente", "validée", "rejetée"],
        default: "en_attente"
    },
    dateCreation: {
        type: Date,
        default: Date.now
    },
    dateIntervention: {
        type: Date
    },
    service: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Service",
        required: true
    },
    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Utilisateur",
        required: true
    },
    technicien: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Utilisateur",
        default: null
    }
});

module.exports = mongoose.model("Demande", SchemaDemande);
