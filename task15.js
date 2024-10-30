"use strict";
// User Subscription System:
// Create a User class with properties like name, subscriptionType, and renewalDate.
// Use an enum to define subscription types (e.g., Basic, Premium, Pro).
// Add methods to upgrade and downgrade the subscription type.
var SubscriptionType;
(function (SubscriptionType) {
    SubscriptionType["Basic"] = "Basic";
    SubscriptionType["Premium"] = "Premium";
    SubscriptionType["Pro"] = "Pro";
})(SubscriptionType || (SubscriptionType = {}));
class User {
    constructor(name, subscriptionType, renewalDate) {
        this.name = name;
        this.subscriptionType = subscriptionType;
        this.renewalDate = renewalDate;
    }
    upgradeSubscription() {
        if (this.subscriptionType === SubscriptionType.Basic) {
            this.subscriptionType = SubscriptionType.Premium;
        }
        else if (this.subscriptionType === SubscriptionType.Premium) {
            this.subscriptionType = SubscriptionType.Pro;
        }
    }
    downgradeSubscription() {
        if (this.subscriptionType === SubscriptionType.Premium) {
            this.subscriptionType = SubscriptionType.Basic;
        }
        else if (this.subscriptionType === SubscriptionType.Pro) {
            this.subscriptionType = SubscriptionType.Premium;
        }
    }
}
let user1 = new User("John", SubscriptionType.Basic, new Date());
console.log(user1);
user1.upgradeSubscription();
// use different methood to try this out
console.log(user1);
