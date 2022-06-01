export default function (instance) {
  return {
    singIn(payload) {
      return instance.post("posts/1", payload);
    },
  };
}
