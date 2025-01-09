
    function atomiApplyParams({inputUrl}) {
      try {
        console.log(inputUrl)
        const inputUrlObj = new URL(inputUrl, window.location.origin);
        const currentPageParams = new URLSearchParams(window.location.search);
        const inputUrlParams = new URLSearchParams(inputUrlObj.search);
      
        // Iterate over all parameters in the current page's URL
        for (const [key, value] of currentPageParams) {
          // If the input URL does not already contain the parameter, add it
          if (!inputUrlParams.has(key)) {
            inputUrlParams.append(key, value);
          }
        }
      
        // Construct the final URL
        const finalUrl = inputUrlObj.origin + inputUrlObj.pathname + '?' + inputUrlParams.toString();
        console.log(finalUrl)
        return finalUrl;
      } catch (error) {
        console.log(error);
      }
    }

    function atomiFormatDate(options = { slated: false, addDate: 0 }) {
      try {
        const defaultOptions = {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        };

        const today = new Date();

        if (options.slated) {
          const slatedDate = new Date(today);
          slatedDate.setDate(slatedDate.getDate() + (options.addDate || 0));

          const day = slatedDate.getDate().toString().padStart(2, "0");
          const month = (slatedDate.getMonth() + 1).toString().padStart(2, "0");
          const year = slatedDate.getFullYear();
          return `${day}/${month}/${year}`;
        }

        if(options.addDate){
          today.setDate(today.getDate()+options.addDate)
        }
        const formattedDate = today.toLocaleDateString(undefined, defaultOptions);

        return formattedDate;
      } catch (error) {
        console.log(error);
      }
    };

    function atomiFormatTime() {
      try {
        const now = new Date();
        return now.toLocaleTimeString(undefined, {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false
        });
      } catch (error) {
        console.log(error);
      }
    };
    function runDelayedFunctions(data) {
      try {
        document.querySelectorAll('.atomicat-delay').forEach(el => el.classList.remove('atomicat-delay'));
        if(data?.setDisplayed){
          localStorage.setItem(data?.setDisplayed, true);
        }
        
      } catch (error) {
        console.log(error);
      }
    }
  
      (function() {
        function atomiRdn(e, t) {
          try {
            return Math.floor(Math.random() * (t - e + 1) + e)
          } catch (error) {
            console.log(error);
          }
        }

        try {
          let initial = atomiRdn(400,700);
          setInterval(() => {
            document.querySelectorAll('.atomicat-random').forEach(el => {
              el.innerText = initial.toString();
            });
            initial += atomiRdn(-1, 2);
          }, 1000);
        } catch (error) {
          console.log(error);
        }
      })();
    
      (function() {
        function atomiEleRandomDrops() {
          try {
            const randomDrops = document.querySelectorAll('.atomicat-randomdrop-text');

            randomDrops.forEach(element => {
              const start = parseInt(element.dataset.start, 10);
              const end = parseInt(element.dataset.end, 10);
              let current = start;

              const interval = setInterval(() => {
                const findDelayParent = element.closest('.atomicat-delay') || element.closest('.atomicat-hidden');
                if (findDelayParent) return;
                if (current > end) {
                  const step = Math.floor(Math.random() * 2) + 1; // Randomly 1 or 2
                  current = Math.max(current - step, end);
                  element.textContent = current;
                } else {
                  clearInterval(interval);
                }
              }, Math.random() * (5000 - 3000) + 3000); // Randomly between 3 and 5 seconds
            });
          } catch (error) {
            console.log(error);
          }
        }
        try {
          const hasRandomDropsText = document.querySelectorAll('.atomicat-randomdrop-text')
          console.log(hasRandomDropsText)
          if(hasRandomDropsText?.length){
            atomiEleRandomDrops()
          }
        } catch (error) {
          console.log(error);
        }
      })();
    (function() {
          try {
              const clickeventList = [{"compKey":"5b694aa8-5fa3-4d4c-88d1-2363fb89998b","misc":{"type":"text"}},{"compKey":"a08bfe6c-3755-4595-a2af-da5c53fb1457","misc":{"type":"text"}},{"compKey":"5c152d22-0cf6-41c7-b43c-938fc58d6506","misc":{"type":"text"}},{"compKey":"64d3c8bd-d675-4b74-9f9c-0b8b8639ae0e","misc":{"type":"text"}},{"compKey":"b636aa7d-5550-43ba-9e5c-8a92261ae691","misc":{"type":"text"}}];
    
    
              clickeventList.forEach((comp, index) => {
                  const compKey = comp?.compKey?.slice(0, 7);
                  const eleType = comp?.misc?.type;
                  const showItemsById = comp?.misc?.showItemsById;
                  const hideAfterClick = comp?.misc?.hideAfterClick;
                  const hideOnComplete = comp?.misc?.hideOnComplete;
                  console.log(comp, "clickevent")
                  if(hideAfterClick) {
                    const hideAfterClickEle = document.querySelector(`.atomicat-hide-after-click-${compKey}`);
                    console.log(hideAfterClickEle, "hideAfterClickEle")
                    if (hideAfterClickEle) {
                      hideAfterClickEle.addEventListener("click", function() {
                          console.log("hideAfterClickEle clicked")
                          hideAfterClickEle.classList.add("atomicat-hidden");
                      })
                    }
                  }
                  if(hideOnComplete) {
                    const hideOnCompleteEle = document.querySelector(`.atomicat-hide-on-complete-${compKey}`);
                    console.log(hideOnCompleteEle, "hideOnCompleteEle")
                    if (hideOnCompleteEle) {
                      hideOnCompleteEle.addEventListener("animationend", function() {
                          console.log("hideOnCompleteEle animationend")
                          hideOnCompleteEle.classList.add("atomicat-hidden");
                      })
                    }
                  }
                  if(showItemsById) {
                    const showItemsByIdEle = document.querySelector(`.atomicat-show-hidden-item-${compKey}`);
                    if(eleType === "progressbar"){
                      showItemsByIdEle.addEventListener("animationend", function() {
                        console.log("animation end")
                        atomiShowItems()
                      })
                    }else{
                      showItemsByIdEle.addEventListener("click", function() {
                        console.log("showItemsByIdEle click")
                        atomiShowItems()
                      })
                    }
                    function atomiShowItems() {
                      showItemsById.forEach((item) => {
                        const hiddenItemId = document.querySelector(`#${item}`);
                        const hiddenItemClass = document.querySelector(`.${item}`);
                        if (hiddenItemId) {
                          hiddenItemId.classList.remove("atomicat-delay");
                        }
                        if (hiddenItemClass) {
                          hiddenItemClass.classList.remove("atomicat-delay");
                        }
                      })
                    }
                  }
              });
    
          } catch (error) {
              console.log(error);
          }
      })();