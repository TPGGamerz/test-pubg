// JavaScript source code
class Team {
    constructor(t,kp1,pp1,kp2,pp2,kp3,pp3,kp4,pp4,kp5,pp5,kp6,pp6,kp7,pp7) {
        this.tname = t;
        this.kp1 = kp1;
        this.pp1 = pp1;
        this.kp2 = kp2;
        this.pp2 = pp2;
        this.kp3 = kp3;
        this.pp3 = pp3;
        this.kp4 = kp4;
        this.pp4 = pp4;
        this.kp5 = kp5;
        this.pp5 = pp5;
        this.kp6 = kp6;
        this.pp6 = pp6;
        this.kp7 = kp7;
        this.pp7 = pp7;
        this.overall = kp1 + pp1 + kp2 + pp2 + kp3 + pp3 + kp4 + pp4 + kp5 + pp5;
    }
}
var arr = [];
//arr[x] = new Team("Team name", kp1 , pp1 , kp2 , pp2 , kp3 , pp3 , kp4 , pp4 , kp5 , pp5, kp6, pp6, kp7, pp7);


arr[0] = new Team("OG ", 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

arr[1] = new Team("squadELEMENT  ", 5, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

arr[2] = new Team("ASG", 4, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

arr[3] = new Team("TEAM LORD ", 1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

arr[4] = new Team("SpYDeR  ", 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

arr[5] = new Team("2乛LITE ", 25, 30, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

arr[6] = new Team("DNZL", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

arr[7] = new Team("TEAM PURGE ", 6, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

arr[8] = new Team("SWIDE ", 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

arr[9] = new Team("BT ", 3, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

arr[10] = new Team("TEAM PWOLI ", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

arr[11] = new Team("BORN KILLERZ ", 12, 19, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

arr[12] = new Team("RTV", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

arr[13] = new Team("TeamXForceE ", 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

arr[14] = new Team("TeamSinnersPSM ", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

arr[15] = new Team("PYRO  ", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

arr[16] = new Team("BRTHxkerela ", 3, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

arr[17] = new Team("RQD ", 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

arr[18] = new Team("InDAuS ", 1, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

arr[19] = new Team("KL01彡CREW ", 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

arr[20] = new Team("DARK ", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

arr[21] = new Team("SPARTANS ", 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

arr[22] = new Team("RCZ  ", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

arr[23] = new Team("8DPKerala  ", 3, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

arr[24] = new Team("TPG CORE  ", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length-1 ; j++) {
        if (arr[j].overall < arr[j + 1].overall) {
            t = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = t;
        }
        else if (arr[j].overall == arr[j + 1].overall) {
            var kpj =  arr[j].kp1 + arr[j].kp2 + arr[j].kp3 + arr[j].kp4 + arr[j].kp5;
            var kpj2 = arr[j + 1].kp1 + arr[j + 1].kp2 + arr[j + 1].kp3 + arr[j + 1].kp4 + arr[j + 1].kp5;
            if (kpj < kpj2) {
                t = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = t;
            }
        }
    }
}
