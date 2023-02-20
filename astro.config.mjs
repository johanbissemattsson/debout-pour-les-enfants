import { defineConfig } from "astro/config";
import NetlifyCMS from "astro-netlify-cms";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://debout.se/",
  integrations: [
    NetlifyCMS({
      previewStyles: [
        '/src/styles/global.css',
        'https://fonts.googleapis.com/css2?family=Asap+Condensed:wght@200;300;600&family=Open+Sans:wght@400;700&display=swap'
      ],
      config: {
        media_folder: 'public/img',
				public_folder: 'public/img',
        backend: {
          name: "git-gateway",
          branch: "main",
        },
        collections: [
          {
            name: "svPages",
            label: "Swedish Pages",
            folder: "src/content/sv",
            create: false,
            delete: false,
            fields: [
              { label: "Title", name: "title", widget: "string" },
              {
                label: "Background image",
                name: "bgImage",
                widget: "image",
                required: false,
              },
              {
                label: "Ingress",
                name: "ingress",
                widget: "markdown",
                required: false,
              },
              { label: "Body", name: "body", widget: "markdown" },
            ],
          },
          {
            name: "enPages",
            label: "English Pages",
            folder: "src/content/en",
            create: false,
            delete: false,
            fields: [
              { label: "Title", name: "title", widget: "string" },
              {
                label: "Background image",
                name: "bgImage",
                widget: "image",
                required: false,
              },
              {
                label: "Ingress",
                name: "ingress",
                widget: "markdown",
                required: false,
              },
              { label: "Body", name: "body", widget: "markdown" },
            ],
          },
          {
            name: "frPages",
            label: "French Pages",
            folder: "src/content/fr",
            create: false,
            delete: false,
            fields: [
              { label: "Title", name: "title", widget: "string" },
              {
                label: "Background image",
                name: "bgImage",
                widget: "image",
                required: false,
              },
              {
                label: "Ingress",
                name: "ingress",
                widget: "markdown",
                required: false,
              },
              { label: "Body", name: "body", widget: "markdown" },
            ],
          },
          {
            name: "svPosts",
            label: "Swedish Posts",
            folder: "src/content/aktuellt",
            create: true,
            delete: true,
            slug: '{{year}}-{{month}}-{{day}}-{{slug}}',
            fields: [
              { label: "Title", name: "title", widget: "string" },
              { label: "Date", name: "date", widget: "datetime", date_format: "YYYY-MM-DD", time_format: "HH:mm" },
              {
                label: "Featured image",
                name: "featuredImage",
                widget: "image",
                required: false,
              },
              { label: "Body", name: "body", widget: "markdown" },
            ],
          },
          {
            name: "enPosts",
            label: "English Posts",
            folder: "src/content/news",
            create: true,
            delete: true,
            slug: '{{year}}-{{month}}-{{day}}-{{slug}}',
            fields: [
              { label: "Title", name: "title", widget: "string" },
              { label: "Date", name: "date", widget: "datetime", date_format: "YYYY-MM-DD", time_format: "HH:mm" },
              {
                label: "Featured image",
                name: "featuredImage",
                widget: "image",
                required: false,
              },
              { label: "Body", name: "body", widget: "markdown" },
            ],
          },
          {
            name: "frPosts",
            label: "French Posts",
            folder: "src/content/actualite",
            create: true,
            delete: true,
            slug: '{{year}}-{{month}}-{{day}}-{{slug}}',
            fields: [
              { label: "Title", name: "title", widget: "string" },
              { label: "Date", name: "date", widget: "datetime", date_format: "YYYY-MM-DD", time_format: "HH:mm" },
              {
                label: "Featured image",
                name: "featuredImage",
                widget: "image",
                required: false,
              },
              { label: "Body", name: "body", widget: "markdown" },
            ],
          },
        ],
      },
    }),
  ],
});

/*
templateKey: post
language: sv
title: En gåva!
date: '2022-05-11T17:03:40+02:00'
featuredImage: /img/plåster-a.jpg
*/
