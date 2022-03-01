const { User, Thought } = require('../models');

const thoughtController = {
    addThought({ params, body }, res) {
        console.log(body);
        Thought.create(body)
        .then(({ _id }) => {
            return User.findOneAndUpdate(
                { _id: params.id },
                { $push: { thoughts: _id }},
                { new: true }
            );
        })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: "No thought found with that id! "});
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.json(err));
    },

    addReaction({ params, body}, res) {
        Thought.findOneAndUpdate({ _id: params.id}, { $push: { reactions: body } }, { new: true })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No thought found with that id!' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.json(err));
    },

    deleteThought({ params }, res) {
        Thought.findOneAndDelete({ _id: params.id })
        .then(deletedThought => {
            if (!deletedThought) {
                return res.status(404).json({ message: 'No thought with that id found' });
            }
            return User.findOneAndUpdate(
                { username: thoughtText.username },
                { $pull: { thoughts: params.id } },
                { new: true }
            ); 
        })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: "No thought found with that id!" });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.json(err));
    },

 


}