const { Schema, model, Types } = require('mongoose');
const moment = require('moment');

const ReactionSchema = new Schema ({
    reactionID: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    reactionBody: {
        type: Schema,
        required: true,
        max:280
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => moment(createdAtVal).format('MMMM DD, YYYY [at] hh:mm a')
    }
}, {_id: false}
);

