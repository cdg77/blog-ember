import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('post');
  },

  actions: {
    save3(params) {
      console.log(params);
      var newPost = this.store.createRecord('post', params);
      newPost.save().catch(function(thingy) {
        debugger;
      });
      this.transitionTo('index');
    },

    destroyPost(post) {
      post.destroyRecord();
      this.transitionTo('index');
    }
  }
});
