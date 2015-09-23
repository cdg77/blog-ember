import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.attr(),
  title: DS.attr(),
  blogPost: DS.attr(),
  image: DS.attr()
});
