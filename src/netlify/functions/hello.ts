import { Handler } from '@netlify/functions'
import Nunjucks from 'nunjucks'

export const handler: Handler = async (event, context) => {
    const jobId = event?.queryStringParameters?.id

    const data = {
        title: `Dynamic Job Title: ${jobId}`,
    }

    const page = Nunjucks.renderString(
        `{% extends "./src/layouts/base.njk" %}
{% block content %}
<div style="background: blue;">
<h1>Hello, {{ title }} you coool job you</h1>
</div>
{% endblock %} `,
        {
            ...data,
            version:
                process.env.NODE_ENV === 'production'
                    ? `.${process.env.GIT_SHORT_SHA}.`
                    : '.',
        }
    )

    return {
        headers: {
            'content-type': 'text/html; charset=utf-8',
        },
        statusCode: 200,
        body: page,
    }
}
