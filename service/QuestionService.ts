import {Injectable} from '@angular/core';


@Injectable()
export class QuestionService{
  http:any;
  baseUrl:String;
  questionList:any;
  shortAnswerAnswer:string;

  img1:string;
  img2:string;
  img3:string;
  img4:string;
  img5:string;
  img6:string;


  constructor(){
   this.shortAnswerAnswer="解：<br>";
   this.shortAnswerAnswer+="<br>$\\because AO$是等腰三角形$ABC$顶角的平分线，$\\angle BAC= 50^{\\circ}$,<br>";
   this.shortAnswerAnswer+="<br>$\\therefore \\angle OAD= \\angle OAC= 25^{\\circ}$且$OA$所在的直线是$BC$的垂直平分线.<br>";
   this.shortAnswerAnswer+="<br>$\\therefore OB=OC$.<br>";
   this.shortAnswerAnswer+="<br>又$\\because OD$所在的直线是$AB$的垂直平分线,<br>";
   this.shortAnswerAnswer+="<br>$\\therefore OA=OB$.<br>";
   this.shortAnswerAnswer+="<br>$\\therefore OA=OC$.<br>";
   this.shortAnswerAnswer+="<br>$\\therefore \\angle OCA= \\angle OAC= 25^{\\circ}$.<br>";
   this.shortAnswerAnswer+="<br>$\\because AB=AC$,";
   this.shortAnswerAnswer+="<br>$\\therefore \\angle ACB= \\angle ABC= 65^{\\circ}$.<br>";
   this.shortAnswerAnswer+="<br>$\\therefore \\angle OCE= \\angle ACB- \\angle OCA= 40^{\\circ}$.<br>";
   this.shortAnswerAnswer+="<br>又$\\because$ 折叠前后$\\angle CEF= \\angle OEF, \\angle OCE= \\angle EOC= 40^{\\circ}$,<br>";
   this.shortAnswerAnswer+="<br>$\\therefore \\angle OEC=2 \\angle CEF= 180^{\\circ} -2 \\angle OCE= 100^{\\circ}$.<br>";
   this.shortAnswerAnswer+="<br>$\\therefore \\angle OCE= \\angle ACB- \\angle OCA= 40^{\\circ}$.<br>";
   this.shortAnswerAnswer+="<br>$\\therefore \\angle CEF= 50^{\\circ}$.";
  
   this.img1='<svg preserveAspectRatio="xMinYMin meet" viewBox="0 0 450 114" x="0px" y="10px" width="260px" height="180px"  >';
   this.img1+='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" baseProfile="full" width="742.667" height="417.333" enable-background="new 0 0 742.67 417.33" xml:space="preserve">';
   this.img1+='<line fill="none" stroke-width="1.33333" stroke-linejoin="round" stroke="#000000" stroke-opacity="1" x1="162.52" y1="306.971" x2="313.701" y2="306.971"/>';
   this.img1+=' <line fill="none" stroke-width="1.33333" stroke-linejoin="round" stroke="#000000" stroke-opacity="1" x1="238.11" y1="74.3273" x2="313.701" y2="306.971"/>';
   this.img1+='<line fill="none" stroke-width="1.33333" stroke-linejoin="round" stroke="#000000" stroke-opacity="1" x1="238.11" y1="74.3273" x2="162.52" y2="306.971"/>';
   this.img1+='<line fill="none" stroke-width="1.33333" stroke-linejoin="round" stroke="#000000" stroke-opacity="1" x1="191.393" y1="218.109" x2="313.701" y2="306.971"/>';
   this.img1+='<path fill="#000000" fill-opacity="1" stroke-width="1.33333" stroke-linejoin="round" d="M 234.531,67.2774L 239.693,58.7498C 239.693,58.6003 239.768,58.5255 239.917,58.5255C 240.067,58.5255 240.142,58.6003 240.142,58.7498C 240.291,58.7498 240.366,58.8247 240.366,58.9742L 241.264,67.9507C 241.264,68.1003 241.264,68.2498 241.264,68.3995L 241.264,68.3995C 241.413,68.3995 241.713,68.3995 242.161,68.3995C 242.311,68.3995 242.386,68.4742 242.386,68.6239C 242.386,68.7735 242.311,68.8483 242.161,68.8483L 240.591,68.8483L 238.795,68.8483L 238.795,68.8483C 238.646,68.8483 238.571,68.7735 238.571,68.6239C 238.571,68.4742 238.646,68.3995 238.795,68.3995C 239.543,68.3995 239.917,68.2498 239.917,67.9507C 239.917,67.9507 239.843,67.1278 239.693,65.4821L 236.102,65.4821L 234.98,67.2774C 234.831,67.5766 234.756,67.801 234.756,67.9507C 234.756,68.2498 234.98,68.3995 235.429,68.3995C 235.579,68.3995 235.654,68.4742 235.654,68.6239C 235.654,68.7735 235.579,68.8483 235.429,68.8483L 234.083,68.8483L 232.736,68.8483L 232.736,68.8483C 232.587,68.8483 232.512,68.7735 232.512,68.6239C 232.512,68.4742 232.587,68.3995 232.736,68.3995L 232.961,68.3995C 233.559,68.3995 234.008,68.175 234.307,67.7263C 234.457,67.5766 234.531,67.427 234.531,67.2774 Z M 236.327,65.0333L 239.693,65.0333L 239.244,60.3207L 236.327,65.0333 Z "/>';
   this.img1+='<path fill="#000000" fill-opacity="1" stroke-width="1.33333" stroke-linejoin="round" d="M 176.858,217.396L 178.878,209.766C 178.878,209.616 178.878,209.466 178.878,209.317C 178.878,209.317 178.803,209.242 178.654,209.092L 178.654,209.092C 178.354,209.092 178.13,209.092 177.98,209.092C 177.681,209.092 177.531,209.092 177.531,209.092C 177.531,208.793 177.606,208.644 177.756,208.644L 177.98,208.644L 182.693,208.644C 184.039,208.644 185.012,209.167 185.61,210.214C 185.909,210.813 186.059,211.486 186.059,212.234C 186.059,213.73 185.61,215.077 184.713,216.273C 183.815,217.321 182.768,217.994 181.571,218.293C 181.122,218.443 180.748,218.518 180.449,218.518L 175.512,218.518C 175.362,218.518 175.287,218.443 175.287,218.293C 175.287,218.144 175.362,218.069 175.512,218.069L 175.512,218.069C 176.26,218.069 176.634,217.994 176.634,217.844C 176.783,217.844 176.858,217.695 176.858,217.396 Z M 180,209.766L 177.98,217.62C 177.98,217.77 177.98,217.844 177.98,217.844C 177.98,217.994 177.98,218.069 177.98,218.069L 178.205,218.069C 178.205,218.069 178.28,218.069 178.429,218.069L 180,218.069C 181.197,218.069 182.244,217.62 183.142,216.722C 183.291,216.573 183.366,216.498 183.366,216.498C 184.114,215.451 184.638,214.104 184.937,212.459C 184.937,212.159 184.937,211.935 184.937,211.785C 184.937,210.588 184.413,209.766 183.366,209.317C 183.067,209.167 182.693,209.092 182.244,209.092L 180.673,209.092C 180.374,209.092 180.224,209.167 180.224,209.317L 180.224,209.317C 180.075,209.317 180,209.466 180,209.766 Z "/>';
   this.img1+='<path fill="#000000" fill-opacity="1" stroke-width="1.33333" stroke-linejoin="round" d="M 156.449,322.466L 158.469,314.836C 158.469,314.687 158.469,314.537 158.469,314.388C 158.469,314.388 158.394,314.313 158.244,314.163L 158.244,314.163C 158.244,314.163 158.169,314.163 158.02,314.163C 157.87,314.163 157.72,314.163 157.571,314.163C 157.272,314.163 157.122,314.163 157.122,314.163C 157.122,313.864 157.197,313.714 157.346,313.714L 157.571,313.714L 162.283,313.714C 163.48,313.714 164.303,314.088 164.752,314.836C 164.902,315.136 164.976,315.435 164.976,315.734C 164.976,316.482 164.602,317.155 163.854,317.754C 163.854,317.754 163.78,317.754 163.63,317.754C 163.181,318.053 162.657,318.277 162.059,318.427C 163.106,318.577 163.78,318.951 164.079,319.549C 164.228,319.848 164.303,320.148 164.303,320.447C 164.303,321.195 163.929,321.868 163.181,322.466L 163.181,322.466C 162.433,323.214 161.461,323.588 160.264,323.588L 155.102,323.588C 154.953,323.588 154.878,323.514 154.878,323.364C 154.878,323.214 154.953,323.14 155.102,323.14L 155.102,323.14C 155.85,323.14 156.224,323.065 156.224,322.915C 156.374,322.915 156.449,322.766 156.449,322.466 Z M 158.693,318.427L 160.713,318.427C 161.76,318.427 162.583,318.053 163.181,317.305C 163.63,316.856 163.854,316.333 163.854,315.734C 163.854,314.986 163.555,314.537 162.957,314.388C 162.657,314.238 162.433,314.163 162.283,314.163L 160.264,314.163C 159.965,314.163 159.815,314.238 159.815,314.388L 159.591,314.388L 159.591,314.388C 159.591,314.388 159.591,314.537 159.591,314.836M 158.02,323.14L 160.039,323.14C 160.937,323.14 161.685,322.766 162.283,322.018C 162.732,321.569 162.957,320.97 162.957,320.222C 162.957,319.624 162.732,319.175 162.283,318.876C 161.984,318.726 161.685,318.651 161.386,318.651L 158.693,318.651L 157.571,322.691C 157.571,322.84 157.571,322.915 157.571,322.915C 157.571,323.065 157.571,323.14 157.571,323.14L 157.795,323.14C 157.795,323.14 157.87,323.14 158.02,323.14 Z "/>';
   this.img1+='<path fill="#000000" fill-opacity="1" stroke-width="1.33333" stroke-linejoin="round" d="M 321.673,313.714L 320.776,317.305C 320.626,317.455 320.551,317.529 320.551,317.529L 320.327,317.529C 320.177,317.529 320.102,317.455 320.102,317.305L 320.327,316.632L 320.327,316.632C 320.327,315.435 319.953,314.612 319.205,314.163L 319.205,314.163C 318.756,314.014 318.307,313.939 317.858,313.939C 316.961,313.939 316.063,314.313 315.165,315.061C 314.866,315.211 314.642,315.435 314.492,315.734C 313.594,316.781 312.996,318.128 312.697,319.773C 312.697,320.073 312.697,320.297 312.697,320.447C 312.697,321.793 313.22,322.691 314.268,323.14C 314.567,323.289 315.016,323.364 315.614,323.364C 316.512,323.364 317.335,323.065 318.083,322.466C 318.831,321.868 319.354,321.12 319.654,320.222C 319.654,320.073 319.728,319.998 319.878,319.998C 319.878,319.998 319.878,320.073 319.878,320.222C 319.878,320.372 319.803,320.671 319.654,321.12C 319.354,321.718 318.905,322.242 318.307,322.691C 317.409,323.439 316.437,323.813 315.39,323.813C 314.043,323.813 312.996,323.439 312.248,322.691C 311.65,321.943 311.35,321.045 311.35,319.998C 311.35,318.502 311.874,317.155 312.921,315.959C 313.969,314.762 315.091,314.014 316.287,313.714C 316.886,313.565 317.409,313.49 317.858,313.49C 318.905,313.49 319.654,313.939 320.102,314.836L 321.224,313.714C 321.374,313.565 321.449,313.49 321.449,313.49C 321.598,313.49 321.673,313.565 321.673,313.714 Z "/>';
   this.img1+='</svg>';
    this.img1+='</svg>';
}

//获取问题列表
  getQuestionList(){
        this.questionList = [
        {
            questionName: '单选题1',
            questionId: '1',
            question: ' 如图，$\\triangle ABC$中，$\\angle A= 36^{\\circ}$，$\\angle B= 72^{\\circ}$，$\\angle ACB$的平分线交$AB$于$D$，则图中共有等腰三角形(　)',
            img:["imgouter/test_t1001_Choice1.png"],
            questionType: 'singleChoice',
            answerList:[
                {id:'A',content:'0个',isRightAnswer:'false',explain:'这个答案是错的'},
                {id:'B',content:'1个',isRightAnswer:'false',explain:'这个也是错的'},
                {id:'C',content:'2个',isRightAnswer:'false',explain:'这个又错了'},
                {id:'D',content:'3个',isRightAnswer:'true',explain:'这个是对的'},
            ],
            favorites:true,
            promptCount: 0
        },
        {
            questionName: '单选题2',
            questionId: '2',
            question: "如图，$\\triangle ACB\\cong \\triangle A'CB'$，$\\angle BCB'=30^{\\circ}$，则$\\angle ACA'$的度数为(　)",
            img:["test/t1001_Choice2.png"],
            questionType: 'singleChoice',
            answerList:[
                {id:'A',content:'$20^{\\circ}$',isRightAnswer:'false',explain:'这个答案是错的'},
                {id:'B',content:'$30^{\\circ}$',isRightAnswer:'false',explain:'这个答案是错的'},
                {id:'C',content:'$35^{\\circ}$',isRightAnswer:'true',explain:'这个是对的'},
                {id:'D',content:'$40^{\\circ}$',isRightAnswer:'false',explain:'这个答案是错的'},
            ],
            favorites:true,
            promptCount: 0
        },
         {
            questionName: '单选题3',
            questionId: '3',
            question: '如图，在$\\triangle ABC$与$\\triangle DEC$中，$AB=DE$，还需要添加两个条件才能使$\\triangle ABC \\cong \\triangle DEC$，不能添加的一组是(　)',
            img:["test/t1001_Choice3.png"],
            questionType: 'singleChoice',
            answerList:[
                {id:'A',content:'$BC=EC,{\\angle} B={\\angle} E$',isRightAnswer:'false',explain:'这个答案是错的'},
                {id:'B',content:'$BC=EC,AC=DC$',isRightAnswer:'false',explain:'这个答案是错的'},
                {id:'C',content:'$BC=EC,{\\angle}A={\\angle}D$',isRightAnswer:'false',explain:'这个答案是错的'},
                {id:'D',content:'${\\angle}B={\\angle}E,{\\angle}A={\\angle}D$',isRightAnswer:'true',explain:'这个是对的'},
            ],
            favorites:true,
            promptCount: 0
        },
         {
            questionName: '填空题1',
            questionId: '4',
            question: '如图，以正方形$ABCD$的边$AD$为边向外作等边三角形$ADE$，连接$BE$，则$\\angle ABE$的度数为 ',
            img:['assets/img/test/chapter1/53_bsd_8x_p2-12_t.svg'],
            questionType: 'fillBlank',
            answer: '15',
            questionField1:'',
            filledBlank1:'请输入',
            fillBlankStatus:'fillBlankAnswerBefore',
            favorites:true,
            promptCount: 0
        },
        {
            questionName: '问答题1',
            questionId: '4',
            question: '如图，在等腰三角形$ABC$中，$AB=AC$，$\\angle BAC= 50^{\\circ}$，$\\angle BAC$的平分线与$AB$的垂直平分线交于点$O$，点$C$沿$EF$折叠后与点$O$重合，求$\\angle CEF$的度数。 ',
            img:['assets/img/test/chapter1/dzd_bsd_8x_p3-17_t.svg'],
            questionType: 'shortAnswer',
            answer: this.shortAnswerAnswer,
            answerImg:'assets/img/test/chapter1/dzd_bsd_8x_p3-17_j.svg',
            favorites:false,
            promptCount: 0
        }
    ];

    return this.questionList;
  }

}
