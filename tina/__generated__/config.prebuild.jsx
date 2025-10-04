// tina/config.ts
import { defineConfig } from "tinacms";
var branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";
var config_default = defineConfig({
  branch: "main",
  // Force main branch to avoid branch detection issues
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "fallback",
  token: process.env.TINA_TOKEN || "fallback",
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
      return { url: `https://driftwell.vercel.app` };
    }
  },
  // Enable visual editing
  cmsCallback: (cms) => {
    cms.flags.set("visual-editing", true);
    return cms;
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
          },
          {
            type: "object",
            name: "blocks",
            label: "Page Blocks",
            list: true,
            ui: {
              visualSelector: true
            },
            templates: [
              {
                name: "hero",
                label: "Hero Section",
                fields: [
                  {
                    type: "string",
                    name: "heroTitle",
                    label: "Hero Title",
                    required: true
                  },
                  {
                    type: "string",
                    name: "subtitle",
                    label: "Hero Subtitle",
                    ui: {
                      component: "textarea"
                    }
                  },
                  {
                    type: "image",
                    name: "image",
                    label: "Hero Image"
                  },
                  {
                    type: "string",
                    name: "ctaText",
                    label: "Call to Action Text"
                  },
                  {
                    type: "string",
                    name: "ctaLink",
                    label: "Call to Action Link"
                  }
                ]
              },
              {
                name: "textBlock",
                label: "Text Block",
                fields: [
                  {
                    type: "string",
                    name: "textTitle",
                    label: "Block Title"
                  },
                  {
                    type: "rich-text",
                    name: "content",
                    label: "Content",
                    isBody: true
                  }
                ]
              },
              {
                name: "services",
                label: "Services Section",
                fields: [
                  {
                    type: "string",
                    name: "servicesTitle",
                    label: "Section Title",
                    required: true
                  },
                  {
                    type: "object",
                    name: "services",
                    label: "Services",
                    list: true,
                    fields: [
                      {
                        type: "string",
                        name: "serviceTitle",
                        label: "Service Title",
                        required: true
                      },
                      {
                        type: "string",
                        name: "description",
                        label: "Service Description",
                        ui: {
                          component: "textarea"
                        },
                        required: true
                      },
                      {
                        type: "string",
                        name: "icon",
                        label: "Icon (emoji or text)"
                      },
                      {
                        type: "object",
                        name: "features",
                        label: "Features",
                        list: true,
                        fields: [
                          {
                            type: "string",
                            name: "feature",
                            label: "Feature",
                            required: true
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                name: "imageWithText",
                label: "Image with Text",
                fields: [
                  {
                    type: "string",
                    name: "imageTitle",
                    label: "Block Title"
                  },
                  {
                    type: "rich-text",
                    name: "content",
                    label: "Content",
                    isBody: true
                  },
                  {
                    type: "image",
                    name: "image",
                    label: "Image"
                  },
                  {
                    type: "string",
                    name: "imagePosition",
                    label: "Image Position",
                    options: [
                      { label: "Left", value: "left" },
                      { label: "Right", value: "right" }
                    ]
                  }
                ]
              },
              {
                name: "contactForm",
                label: "Contact Form",
                fields: [
                  {
                    type: "string",
                    name: "formTitle",
                    label: "Form Title",
                    required: true
                  },
                  {
                    type: "string",
                    name: "subtitle",
                    label: "Form Subtitle",
                    ui: {
                      component: "textarea"
                    }
                  }
                ]
              },
              {
                name: "cta",
                label: "Call to Action",
                fields: [
                  {
                    type: "string",
                    name: "ctaTitle",
                    label: "CTA Title",
                    required: true
                  },
                  {
                    type: "string",
                    name: "subtitle",
                    label: "CTA Subtitle",
                    ui: {
                      component: "textarea"
                    }
                  },
                  {
                    type: "string",
                    name: "buttonText",
                    label: "Button Text",
                    required: true
                  },
                  {
                    type: "string",
                    name: "buttonLink",
                    label: "Button Link",
                    required: true
                  }
                ]
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
