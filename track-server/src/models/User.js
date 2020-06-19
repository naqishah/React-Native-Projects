const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({

    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

userSchema.pre('save', function(next) {
    const user = this;
    
    // To check if the password is being modified or created for the first time
    if(!user.isModified('password')) {
        return next();
    }

    // Generate salt for password
    bcrypt.genSalt(10, (err, salt) => {

        if(err) {
            return next(err);
        }

        // Merge the provided password with salt and hash it
        bcrypt.hash(user.password, salt, (err, hash) => {

            if(err) {
                return next(err);
            }
            user.password = hash;
            next();
        });
    });
});
   
userSchema.methods.comparePassword = function comparePassword(candidatePassword) {
 
    return new Promise((resolve, reject) => {

        bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {

            if(err) {
                return reject(err);
            } else {
                resolve(true);
            }
        });
    });
};


mongoose.model('User', userSchema);