 const nextConfig = {
          async rewrites() {
              return {
                  beforeFiles: [
      
                      {
                          "source": "/blog",
                          "destination": "https://blogcontent.superblog.cloud/"
                      },
                      {
                          "source": "/blog/(.*?)([.]\w{2,5})(\?[^/]+)?",
                          "destination": "https://blogcontent.superblog.cloud/$1$2$3"
                      },
                      {
                          "source": "/blog/([\S\s]+)",
                          "destination": "https://blogcontent.superblog.cloud/$1/"
                      },
                      {
                          "source": "/_elderjs/svelte/(.*?)([.]\w{2,5})(\?[^/]+)?",
                          "destination": "https://blogcontent.superblog.cloud/_elderjs/svelte/$1$2$3"
                      },
                      {
                          "source": "/_elderjs/svelte/([\S\s]+)",
                          "destination": "https://blogcontent.superblog.cloud/_elderjs/svelte/$1"
                      },
                      {
                          "source": "/.netlify/functions/(.*?)([.]\w{2,5})(\?[^/]+)?",
                          "destination": "https://blogcontent.superblog.cloud/.netlify/functions/$1$2$3"
                      },
                      {
                          "source": "/.netlify/functions/([\S\s]+)",
                          "destination": "https://blogcontent.superblog.cloud/.netlify/functions/$1"
                      },
                  ]
              }
          }
      }

      module.exports = nextConfig       
