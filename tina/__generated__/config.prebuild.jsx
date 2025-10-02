// tina/config.ts
import { defineConfig } from "tinacms";
var branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";
var config_default = defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public"
    }
  },
  ui: {
    previewUrl: ({ branch: branch2 }) => {
      return { url: `http://localhost:3000` };
    }
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true
          },
          {
            type: "string",
            name: "excerpt",
            label: "Excerpt",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
            required: true
          },
          {
            type: "string",
            name: "author",
            label: "Author",
            required: true
          },
          {
            type: "image",
            name: "coverImage",
            label: "Cover Image"
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true,
            ui: {
              component: "tags"
            }
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true
          }
        ]
      },
      {
        name: "page",
        label: "Pages",
        path: "content/pages",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "string",
            name: "slug",
            label: "URL Slug",
            description: 'The URL path for this page (e.g., "about" for /about)',
            required: true
          },
          {
            type: "string",
            name: "pageType",
            label: "Page Type",
            options: [
              { label: "Homepage", value: "homepage" },
              { label: "Standard Page", value: "standard" },
              { label: "Services Page", value: "services" },
              { label: "About Page", value: "about" },
              { label: "Contact Page", value: "contact" }
            ],
            required: true
          },
          {
            type: "image",
            name: "heroImage",
            label: "Hero Image"
          },
          {
            type: "string",
            name: "heroTitle",
            label: "Hero Title"
          },
          {
            type: "string",
            name: "heroSubtitle",
            label: "Hero Subtitle",
            ui: {
              component: "textarea"
            }
          },
          // Inline editing fields
          {
            type: "string",
            name: "servicesTitle",
            label: "Services Section Title"
          },
          {
            type: "string",
            name: "service1Title",
            label: "Service 1 Title"
          },
          {
            type: "string",
            name: "service1Description",
            label: "Service 1 Description",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "string",
            name: "service2Title",
            label: "Service 2 Title"
          },
          {
            type: "string",
            name: "service2Description",
            label: "Service 2 Description",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "string",
            name: "service3Title",
            label: "Service 3 Title"
          },
          {
            type: "string",
            name: "service3Description",
            label: "Service 3 Description",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "string",
            name: "aboutTitle",
            label: "About Section Title"
          },
          {
            type: "rich-text",
            name: "aboutContent",
            label: "About Section Content"
          },
          {
            type: "string",
            name: "contactTitle",
            label: "Contact Section Title"
          },
          {
            type: "object",
            name: "seo",
            label: "SEO Settings",
            fields: [
              {
                type: "string",
                name: "metaTitle",
                label: "Meta Title"
              },
              {
                type: "string",
                name: "metaDescription",
                label: "Meta Description",
                ui: {
                  component: "textarea"
                }
              },
              {
                type: "image",
                name: "ogImage",
                label: "Social Media Image"
              }
            ]
          }
        ]
      },
      {
        name: "site",
        label: "Site Settings",
        path: "content/site",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Site Title",
            required: false
          },
          {
            type: "string",
            name: "description",
            label: "Site Description",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "image",
            name: "logo",
            label: "Logo"
          },
          {
            type: "string",
            name: "url",
            label: "Site URL"
          },
          {
            type: "object",
            name: "social",
            label: "Social Media",
            fields: [
              {
                type: "string",
                name: "twitter",
                label: "Twitter URL"
              },
              {
                type: "string",
                name: "github",
                label: "GitHub URL"
              },
              {
                type: "string",
                name: "linkedin",
                label: "LinkedIn URL"
              }
            ]
          },
          {
            type: "object",
            name: "contact",
            label: "Contact Information",
            fields: [
              {
                type: "string",
                name: "phone",
                label: "Phone Number"
              },
              {
                type: "string",
                name: "email",
                label: "Email Address"
              },
              {
                type: "string",
                name: "address",
                label: "Address",
                ui: {
                  component: "textarea"
                }
              }
            ]
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
