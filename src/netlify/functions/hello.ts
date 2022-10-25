import { Handler } from "@netlify/functions";
import Nunjucks from "nunjucks";
import { readFile } from "fs/promises";

export const handler: Handler = async (event, context) => {
  const jobId = event?.queryStringParameters?.id;

  // const layout = await readFile("./src/layouts/job.njk", "utf8");
  // const template = Nunjucks.compile(layout);
  // const page = template.render();

  const data = {
    title: `Dynamic Job Title: ${jobId}`,
  };

  const page = Nunjucks.renderString(
    `{% extends "./src/layouts/base.njk" %}
{% block content %}
<div style="background: blue;">
<h1>Hello, {{ title }} you coool job you</h1>
</div>
{% endblock %} `,
    data
  );

  return {
    headers: {
      "content-type": "text/html; charset=utf-8",
    },
    statusCode: 200,
    body: page,
  };
};
