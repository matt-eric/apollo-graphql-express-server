import mongoose from 'mongoose';

import user from './user';
import effect from './effect';

let mongoURL = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@realmcluster.sh5nv.mongodb.net/${process.env.MONGO_CLUSTER}?retryWrites=true&w=majority`

const connectDb = () => mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true});

const models = { user, effect };

export { connectDb };

export default models;
