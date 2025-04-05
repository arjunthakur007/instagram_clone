// rafce
import React from "react";

export const Hero = () => {
  const card = [
    {
      user: {
        image:
          "data:image/jpeg;base64,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",
        profile_name: "Arjun Thakur",
        song_name: "A Beautiful Day - U2",
      },

      media: {
        post_image:
          "https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=",
      },

      reaction_section: {
        buttons: {
          like_icon: "❤️",
          comment_icon: "💬",
          dm_icon: "✈️",
          save_icon: "🔖",
          like_count: "123",
        },

        comment_section: {
          view_comments: "View all 15 comments",
          add_comment: "Add a comment...",
          emoji: "😊",
        },
      },
    },

    {
      user: {
        image:
          "data:image/jpeg;base64,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",
        profile_name: "Arjun Thakur",
        song_name: "A Beautiful Day - U2",
      },

      media: {
        post_image:
          "https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=",
      },

      reaction_section: {
        buttons: {
          like_icon: "❤️",
          comment_icon: "💬",
          dm_icon: "✈️",
          save_icon: "🔖",
          like_count: "123",
        },

        comment_section: {
          view_comments: "View all 15 comments",
          add_comment: "Add a comment...",
          emoji: "😊",
        },
      },
    },
    {
      user: {
        image:
          "data:image/jpeg;base64,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",
        profile_name: "Arjun Thakur",
        song_name: "A Beautiful Day - U2",
      },

      media: {
        post_image:
          "https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=",
      },

      reaction_section: {
        buttons: {
          like_icon: "❤️",
          comment_icon: "💬",
          dm_icon: "✈️",
          save_icon: "🔖",
          like_count: "123",
        },

        comment_section: {
          view_comments: "View all 15 comments",
          add_comment: "Add a comment...",
          emoji: "😊",
        },
      },
    },
    {
      user: {
        image:
          "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQA5AMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAEAAECAwUGB//EAEAQAAIBAwIEAwYEAwYEBwAAAAECAwAEERIhEzFBUQUiYQYUcYGRoTJCUrEjwfAzYnLR4fEVFoLCNENFY5Oi0v/EABoBAAMBAQEBAAAAAAAAAAAAAAECAwQABQb/xAAkEQACAgEFAAICAwAAAAAAAAAAAQIRAwQSITFBE1EUMiJhgf/aAAwDAQACEQMRAD8A5QLT6asAp8V9MfIbirTmlpq0ClimOsq0UtFWYpaa47cV6aWmrMUgK47cVaafTVwXNPwz2rjtxRoqQjq9Y6sWKg2Mk2UpDmiY7er4YfStS0s9XSpSnRqx4zINttyqmS3wOVdU3hp0Z0Gs25tCucjFTU7KuBzzQ1Xwq05IwM1SYxVkzNKHIDw/Sm4dGFKbh+lGxdoKI6XDozh0uHXHbQQRVIRUSI6fRQsO0H4dLh0To2pBaFjbUUiPalw6IC0tNCztqB9FNRGimrgbSuHh3Ca4JFcddJ3HypGMiuJiu5InDxuVYfmXY1tWXtHIuFukWRf1jZqhDVxf7cFcmha/U3AlMVqEPinh9wVCT6WbkrjH35VehSUExOjj+6Qa0LJF+mWWGS7RVpxT6c1doqSpTbhfjKhHUhF6USkZ7VasJ7Udw6xggj9Klw/SjBD6GpCA9qG4KgBCOrEjongnOwpCMilcisY0Tt0GRXU+CWyySKCK5ePykV0HhF7wHVs1mzW1wa8TS7O4n8HgW1JUbgc64PxeBUY11U3j+u2KZ6Vx/idzxCazYFJN2aczi0qMSdACaGKCiZDkmqjW5MwSXJQUpaKsNNkU1i0R0ilpFSyKbUK6wUR00sVLOaRHPOwyKFhUbIYpYqp7qBELtKukZ3z2xVK+KWZm4S3CMwxyO3Ln8sb0ryRXo3xyfgXiligJfGbCLB46sCxXykHGOZOcbUH4h7Q2UeEt5Gdg6lmC4BXO4FI80V2xlhm+kbfxpVzt57WWySgWyM6aRuykHNKk/Jx/Y342T6OaU1Z0yOQodZUxzqSzKv5hivN3I9FxZcOdWxSyxMHiYqR1B3oXjKN85qS3CjfViqKdeiuL+jftfaG5iAWZElz1bY1pQe0dsV/iQSBs9GGPrXKrOGwS9OLiLSQzDarxzyXpnlgi/Drj7Qtzhtkx3Zif2xTH2gvCfIkC/wDSf865iOaLmsgHzq6O+ibSC6tk4qyzp9kXp2ukb/8AzDfEggxf4dFRfx7xB8gOq/4UFZ0ctqcFn/Np7ijI7cEBlwQeRpt99M5Yvssi8Y8RB/t846MoNatl45G217Ho7PGCQfiOlZEhhtlLTyKg6Z655fsaDPjFmH8qO46kAA/1zofLXo/w2ujuI2hlVWilR1P6SM1NJCm3auA/4zFqOiDGPwsXxijIPai8GFbhsOgfc/Wg8qZyxNHcG6cjGo0NLIWPOuYj9qJQgMsMbjupxmrJfaeFWI93Pr5uVBTic4SNpzVTNXNXXtPNIpW3jSP+8fMaBm9ob1tuIq532Si86QFhbOvLVRcTiFGYkE6SyrnnjA/mK4l/GL1xvdSf9LY6UI9w7Yy7HGwyeVTep+ii032dvceK2sCIZpApbHlG5Gaz5Paa3X8ETt9hXJtIT1NQ11N6mZWOmj6dNL7VSasQ26BcEbkk56VnSeO3rySFXVeIwJ2OBjGMfQVkMc02ak8s36VjhgukEPcSOio0jFVGAM8qq14OQd6rLVAvUrKqJdmkNzgmqdWetNqoWNtLSRmlVOqnoWdQiD2p9LHoakZD/Qpa3xzoDDcJ/wBDfSpCGXGRG2PhTcWX9ZpCR+WSB13NEBMK4G6kU4jkO+k1FSx5k0+ls9aIpIRSfoNSEMn6DUAH/vU+mT9JPyogL+BKqatBx3pPc3DRGMu5UtqI9aaG3ndThDyztWhD4HPLAzs4RiMqp69aooyYm6K7MtnkbGSxHqakuTyFaU3s/exJrTRId8hW3oExtHtNbzDfH9oF/wC2g7iHh9DLq7GrAzDoarLBTgwMCOhlH/5ouzu5Ldy62sDH/wB0hh9CMCjv/oGwrBfI8pqt2bVuK7ex8MV/C4bq7toY5JPMUS3jwBnbmtc94rrhne3PhsBUHytGgQsOn4Vz96VZL4HeJpcmKWqJJ7US0sQ/9Pi/+d/86gJodX/gYwfSZx/Ou3CqKBTntUd+1SbdsgFQeQzn71HB70LsahqakaVAIqamNNqoWEYiljPKmJNI0ow5UjmKalSrgjUqalXHBOBmpBV7VAU+cUVRJlgVR0pwB2FRGTyFHW/hd1OAyrpXuxxTxi5dInKaiv5MGXSO1TyMg4271r2/gADg3FwpH6Ywa2rZLK0UCGBAQMamGT9a1Q0033wZZ6rGuE7OYit5yA3CZRjILLRAhXOW54AxXWjxDACgkDljpUffIZG80aYXYjSNzVlgS9M71N+HNq2geXpVq3LLzzj410a3Frg5hiwemgVI3NqFwIIiO2kVX4mIsyMCK+I/MfrRMMr3MgSJNZ9ANvj2rag8MkvSJIPD4kQ/+bKNK/18qnLdeGeEs0OX8RuwNre2GlF/xHpUJSinTds1wU2rrgotvBRP57ho9SjLYUEKB1LHYUFMPDQ5SzsLdVj4QMs8WTKHLDy55DCnfrUPGL69uktTdSokRuY1FrbjEQGev6qqvbm1PjMiSTIpxACrHG4Ztvod6z5m65VGvAlap2bct4ZIm0vEFGwXWTj4b0Anir2MiOwjnjfIZDzOFOMHOx9a0Hhi4atmMDGNuVYPj81vDbqysilSfKJM6tuxFY1wzbKnE37+ztZYkne1jmjJI1sm4PUHtWVL4T4XMc+6RjH6Nsmr/B/FJLfxO7ubdzNC+gtFnKupXfbkD61pXtlZeIw+/eCyqAwLGJhhT3H90/b4V6EJrhTR5mWEnzD/AFHPyezXh0kZEetGxzDZ69qAuPZaNJ40imdkcnoDpAxz+ta6tIr6GUhhzHar1ketDwwkroyLUTT7OQufZu+jP8NRKNgNPMms6Xwu9iVme1lAXmdJ2r0DU2CKWWxzqT0kX0yq1kl2eatFIpAdGXPLUpFQIr0l7aOZo3kRWaM5UnpWbN7P2kmsHUNWNOOhAx/Koy0cl0y0dZB9o4bTtmmIwK68eykHFBE7lABkbduf1xSk9lIiy6J5FAzqyMk9sVP8bJ9FfysX2cjimIrpB7KytdGJZjoC6i5XvnAHehf+WvEDIi6FAYZ1Fth8aR4ZrwdZ8b9MXFKtZfZ7xE5xbnAJGSwGfWlS/HP6G+WH2AqhOO/ajrXw2aTBZdC92rWhSCEfw0UHuedXcbatePTx9MGTVyf6ortrKG3AIXU36mFF6z3oYzClxc/5VrW2C4Mct03bClWRn05ycZGTUGkPqT2od55VfrpIwA5zj4fSprMYkZtP8MAhifynJrLl1M4q/C2PAnwWSPpwdQHTB708evGGG+e1Bm6V2SRtKsPIEAJOD1/r0oizmjkiYvKW0NgsFOf6xUIay8lvorPTJRpBIbPwqRBZCAzKehU4qh2ygeLPDI1eo9PjVfGw2AT2ya9HHnjkRilhlB2Th/4zPDIt/wCL3Ri0nESyc8etC+yIDQ3Zdzq1jmelX3Nyy2j8PTrOcs5wAMVi+GMosbgbHLbJnBf0z0GawTnDHk/guj1MayZsb3vvo6rxSIRx2C6iHluoyp0gkLn8Xwzy71o+H29pF7UWje6RuwiDhymrBUnc9ydhWDezNLBatrZ2eeJjI5JJwcDc9BW17PXBvfFruaLUY4IxEjYJzk7n/wCufnQzZVKDk+2V08GmkukeiP7T3MY4ZFq22weIjP3rlfbWUeI+ExtNa27hZ42AVc6csATv6E1dLazyNqlD7chwzj9qU0BmtpUnQMmN+ef86xRlyjdJWmcxYcG38Yv4FRY4X0mNhsFYL+HHbFc34RYR+J2d4GmdJYpsxNqOkZzkEeu1akyFLy/jLavOhDqewOCPvWZ7OuqW10C2GaXYdTgVuTjOcV4edJyhCUl2b1gkdlYxQswaRR5iOTHvVxuUrLaVuJpBJJ2FV8XO5B05wa9FTjFUjympzds1vegOlI3g7VkmVgMlvL0q19cdupYEuW2GckCpy1MI1foVikzQW7UlgTjbIpmuttzvWVxVX84LY+WaUs6iRtJyoOx70I5blQXjdGp71tzpe9Z61k8alxqpvQmyRr+9+tL3od6yON60/G9a7eqO2M1/eiev3pVkcanrtx21gBlIJB6U3FI51OMJqCsVWTGfMOoqi4TggBnBPpXmw1Kk6PQ+IsEuSB361ZbvG0mGlK76dhnP3FAB/htUZMMw0t9RRzSk1wx4QXpokRqr8OQ88b9+oPrVMszR8TQ2pgvNhgDO5Prz+NAx3LIyqjMrA7szn13Har3kVgysqtqGxQ8vX61icpviT4NGxLlE7WfCzkgu7FcNnA2/oUdCqSiNQoUI5YqO3QVkalYoIlIB34ecgfWtcJMFDuATtqUgjSOhwPj9qlPhhCotQllUprRQWwcjpv035GqJpBI2lDq5FN8Z+VDLMV8zuyldyVOzDlmjrhUdWuJP4jjYqH0nI55+B+1Wx5Xvtsm8d8FPjEaQeERtLIFd5PKgOWcYOfl6+tZfgelml1hAAu7MM49R61V4g5TIm1SXBH4m20DPKqrCRo1kC4LNtj+ddOW/kvGCiqN2SaNIlC5MiqGC/iBPLr23PyFdn7M2LWNikTnzyjiOQfzH5dq4bwOynvL+HigNEp4jHvjfpvzxXoFst3NG/wDC042UEk7d+VJKT20XxQS5NAAHJ1DIGNyT/wBtUMRGoy8Y57EHn9KGS3uYyWMeoZ2zn+Qql5iWbMfnG2AWNKWoyvaaILOssTpqddX4SMaflvz+1cd4JMFuZVYZD5wee/Sup8YPGZ2kVlaEYIGcA9Rz7YNcXaIGVgjaWYkau1PjnRkywXKOgZcsWj1HTzZzzqdihnkkZgHyCVy3I7fy/aqZXLgRgBgMgFRu3qc8+9WWXkieRQAo3J6+gx16/SqTzPZ/ZkWNJhV1E0NtIQySocfh257d/wCsVZJLhIUleNWZdiiMc9eY5Dpmg1Y3EqhV1hgFBB5ev0q2NmSJmPmwMrp/Keox8uVY8mRuKvtDuCK47eK5g8i+Y4JUEDTz257/AG+1UvCI4izM2cEgahvnlUbC4jtrmWM5Qsu3l78x9P3qzViIyFg2SPLkeUc+eKaOfJGQjhYKxZQSwYYGdxUdTdQa1DoW0YI6yYHm1DA822M/OgrdYzDh2P4ipOMkY9PnWqOutNtCPEkKXSiRkBhIB5gTtn0qoMx2AJzyxRXimI5mCyEyOvnBzsOeMdKrt0bJBaUaWBZlXkOu9UxapuFi/EitZ8DHDDeppUjcaWKSNKGQ6fLKAPuKVUWWLO+MsgT+GTIX0E4OgZYD49qjJwQSY4iXHWQAY+FDTXh0DMYPZc5+tBC70RkMq7chyI+FefFPs07bLZ9bsx0sij9Wo71Bi1uw0yBsjPyoU3DFgQcY3yB1qtpCTkY2GOVaNzqh1Es1iRyzKXJNWLhFOrAUbNpJyKHiJDawQDy3FWDfbPmJPTY0o9FtrIeOeIOXMA4P160Xr82lzIqY8sfc98dqFt5JPKDtrOdfKiba5eSYgb6DyHNqSaAwu2t2biM8QVDyJHIA539TRV4iIi65kDqunSoUbc8D+utPJJLwxIY8Y/Bvj1339azfErgRwrE8YLsPx9T8akm2zkq5M24lMsxdxnK4zmnsdTOFUZ/NjOM46fOh3JJ5Y9KIsrSaeReGrkZ30YyB6Vorgbs6/wALjhRn0vHqJI2RmOOnSt3jW2VLCEk9oJDgfDG9cxZw3EAyUuz20heY5bBvn8qt94M/9ubvABwGXH3/AN6zqNGmPCN678R8Pt0VmEZJ6+5vt9qjJPaSL/A93kA3J4Lhv2rLi4JJETyq3MnByT23+VKC6VWeSRySoOFAO55c/lRY1g83iEU6zxWiM8gJyoXQflnp8e1cihCZ/wAfI12lxd2EsDyLbTRPyduIDqPqMZ71yd7bxxzsB5Qx1BdedO/XbamxpIhkRpxXGbePVICSNKljy+PpWhFw0gS4gAlUElmKnyk9cfL9656KRVVBIDhjuc5OPh61rLJbiA8FpECrllbzae2B9ankVEWh5LhxIZdDhmYFdRyBg7Z+Yqd5cxcUNGnl2cFVwvfGD6/ahpUWNuOZVYNtt1P7ChZm0IXYBjgYKvqA/oV2y+TmgmYInDnQan/MFODuef7D4GhuKBCGnZldW0+Ub/XmPhUvexJBw0ULDgAlgDsN9qz8jSVBP4jpYjc+lUhF+gUQ6G6lTnIF4gI38oIxRtpOkdu0kjKwLY0BsEjA3x061kW7anTiOyhSNOBkDv8AaikCtIGjOoBtO5G3x7enzoSh4BxJ+IXJvL7jooGnCY0nyjPM46j+VGwSO8gMiBiI+GeedxpNCzQniAF9JIw+ByPrv8KukW4ufMjJqiXUzg7kjkR9RQ4SSQrRbNA0kjMZo4yea4zj7U9XWlxaGEe8W4Mg5sd8/Y/vT0Ln9iUYlxbm3jifbB3LHr8qrkTXHmSNFY7kjp8e3+lGz3VtIkYETalOAxzpH+tWXEtpvqhU7oRrBydjuaZSa8KJswpIsHBYaSefeq9IA55o67eErr4jO+r8PQD50G7qQdKhd9h2qybZREM42FWxfxCAwJHIYOKqVgp865FS4gAYImx7miMXPIialGrYYFWWkwikPlVgfynrQiq8jDr60c0K26KdTbjOQc4+fSg0BoJHiZ92EbLgYIB65zWbcTGdsnpSmSRjxZPKX5ZHMVFE7nPw510YJcnCROp+1bdhC8MCSxR8WR8EKcgKKBs7YyBmUEx4xqHPVzrbsIdMWLnQFTHPJB+Ypckq6KY432XWVpxCH1hSn5RgfTPTnRNu8SoA5K6smMBz0+G/UdaFMN07HgyMsa4yEGRj408VpalhITbh8ZHmPP5fvUi1GlNdSTRaQsgjGd+wz2oFFRWzAZJPipXlj+WR86vj1v5roNHGRjVkEH4djVjErFqiUGEbkL++Mc6Ww0Cs8a7yWyg7YdU3+f2rO8V8ML2rXCqgk1Z0xg7rj/c1pEExtm1LRv8A2nlAx67/ABoUAyzMySMd8M2MnHqTzPzNPFiSRzL5wCDk9G7VbJeMSHxpZl3wOZ7015EYJ2RMcPmhJz5aFkyd8kjoavVmd90FRP72ki3M5Ug6gD1qqaOSKFGWRjG2zeh6gih1LKcg4Ybg0fbyQzKUmdo3OAZAT5sd/X1rglVuZYw3lOkr+AgebPoadIGdOIi5GcEDYr/vRK+7cZxrknUHJQjIY989Om9PKIxG6ys8S7KWUAkEcg2P3FccApqJ3yDn8WKPsnZPLhsBsEkYwdjv9KGuZopZQLcsFO7A7ZPfFEeHyKCNY8gJGosQCaSXQrRqwRxyuRoDK/mCRJnUQOYGOWenSofwtMyoZUJJVlPfBxkfHHTnV0N08DSmxV0UjC6hnVv0IoGSZXTIQq4b8ux2+3+9RpsSnZUkjAHhAsufxAZzT1F40Ok8ItlRyJH19aVG0Giu5Ja4ijydJFUXuyxtknAAAPQYpUqpHocDLEgnqar60qVVCSAGB6k1ORAvInrSpVxwUy8CEuhOT3+NE2w99uoxMTgkbKcdqVKlCivxPbxCSEDyRgBfpQhYqwA6ilSpvBfTat4VELbthB5RnblWxa/w7Nyp6quDyAJ7U9Ks0+zTEipZJpEDHTpJx8qaKGMskgRVfVjIHP1pUqUJoiPVYiQs2okZ+may/e5+NNAJCqoQQQNznvTUqASM9xMmgpIVOopyB2Gjv/jNFIoFq7jmkoQDpg86VKnYF2Y/tNCsTxMCSS5Xzdqw37UqVWx/qjNP9iph5jUKVKnAOjlXBGMj0oi7Y6tBwRjVy3zSpVwQZTvRMErJFsBsedPSoM437S3he8jV4w3FVdR5HcdxWJeSNx8dGG/z50qVIuwDwzOkYAI+YpUqVE4//9k=",
        profile_name: "Arjun Thakur",
        song_name: "A Beautiful Day - U2",
      },

      media: {
        post_image:
          "https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=",
      },

      reaction_section: {
        buttons: {
          like_icon: "❤️",
          comment_icon: "💬",
          dm_icon: "✈️",
          save_icon: "🔖",
          like_count: "123",
        },

        comment_section: {
          view_comments: "View all 15 comments",
          add_comment: "Add a comment...",
          emoji: "😊",
        },
      },
    },
  ];

  return (
    <div className="max-w-150 w-screen">
      <div className="w-full h-16 bg-amber-50"></div>

      {card.map((i, index) => (
        <div
          key={index}
          className="w-[300px] border-b border-t font-sans mx-auto my-5"
        >
          <div className="w-full p-2 flex items-center border-b-1 border-b-neutral-800">
            <img
              src={i.user.image}
              alt="Profile"
              className="w-8 h-8 rounded-full mr-4"
            />
            <div className="w-full flex ">
              <div>
                {" "}
                <p className="mb-1 text-sm font-light">{i.user.profile_name}</p>
                <p className="m-0 text-xs text-gray-500">{i.user.song_name}</p>
              </div>
            </div>
          </div>

          <div className="">
            <img src={i.media.post_image} className="w-full h-[300px] block" />
          </div>

          <div className="p-2 w-full">
            <div className="flex justify-between">
              <div>
                <div>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                      />
                    </svg>
                  </span>
                  <span>{i.reaction_section.buttons.comment_icon}</span>
                  <span>{i.reaction_section.buttons.dm_icon}</span>
                </div>

                <span>{i.reaction_section.buttons.like_count} likes</span>
              </div>
              <div className=" ">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div className="flex w-full justify-between items-center">
              <div className="">
                <p className="m-1 text-sm text-gray-500">
                  {i.reaction_section.comment_section.view_comments}
                </p>
                <p className="m-1 text-sm text-gray-500">
                  {i.reaction_section.comment_section.add_comment}{" "}
                  {i.reaction_section.comment_section.emoji}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
