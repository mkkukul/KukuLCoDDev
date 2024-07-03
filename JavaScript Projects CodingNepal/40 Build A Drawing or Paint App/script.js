/* Import Google font - Poppins */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}
body{
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background: #4A98F7;
  }
  .container{
    display: flex;
    width: 100%;
    gap: 10px;
    padding: 10px;
    max-width: 1050px;
  }
  section{
    background: #fff;
    border-radius: 7px;
  }
  .tools-board{
    width: 210px;
    padding: 15px 22px 0;
  }
  .tools-board .row{
    margin-bottom: 20px;
  }
  .row .options{
    list-style: none;
    margin: 10px 0 0 5px;
  }
  .row .options .option{
    display: flex;
    cursor: pointer;
    align-items: center;
    margin-bottom: 10px;
  }
  .option:is(:hover, .active) img{
    filter: invert(17%) sepia(90%) saturate(3000%) hue-rotate(900deg) brightness(100%) contrast(100%);
}
.option :where(span, label){
  color: #5A6168;
  cursor: pointer;
  padding-left: 10px;
}
.option:is(:hover, .active) :where(span, label){
  color: #4A98F7;
}
.option #fill-color{
  cursor: pointer;
  height: 14px;
  width: 14px;
}
#fill-color:checked ~ label{
    color: #4A98F7;
  }
  .option #size-slider{
    width: 100%;
    height: 5px;
    margin-top: 10px;
  }
  .colors .options{
    display: flex;
    justify-content: space-between;
  }
  .colors .option{
    height: 20px;
    width: 20px;
    border-radius: 50%;
    margin-top: 3px;
    position: relative;
  }
  .colors .option:nth-child(1){
    background-color: #fff;
    border: 1px solid #bfbfbf;
  }
  .colors .option:nth-child(2){
    background-color: #000;
  }
  .colors .option:nth-child(3){
    background-color: #E02020;
  }
  .colors .option:nth-child(4){
    background-color: #6DD400;
  }