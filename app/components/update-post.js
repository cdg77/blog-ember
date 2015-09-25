import Ember from 'ember';

export default Ember.Component.extend({
  updatePostForm: false,
  actions: {
    updatePostForm() {
      this.set('updatePostForm', true);
    },
    update(post) {
      var params = {
        user: this.get('user'),
        title: this.get('title'),
        image: this.get('image'),
        blogPost: this.get('blogPost')
      };
      this.set('updatePostForm', false);
      this.sendAction('update', post, params);
    }
  }
});
