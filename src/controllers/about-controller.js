export const aboutController = {
    index: {
      handler: function (request, h) {
        const viewData = {
          title: "About MyTrails",
        };
        return h.view("about-view", viewData);
      },
    },
  };