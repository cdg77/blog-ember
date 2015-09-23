import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  actions: {
    postFormShow() {
      this.set('addNewPost', true);
    },

    save() {
      var params = {
        user: this.get('user'),
        title: this.get('title'),
        image: this.get('image'),
        blogPost: this.get('blogPost')
      };
      this.set('addNewPost', false),
      this.sendAction('save', params);
    }
  }
});
