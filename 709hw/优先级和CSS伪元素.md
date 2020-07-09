| 题目                               | 优先级     |
| ---------------------------------- | ---------- |
| li                                 | (0,0,0,1)  |
| ul li                              | (0,0,0,2)  |
| ul ol+li                           | (0,0,0,3)  |
| h1 + *[REL=up]                     | (0,0,1,1)  |
| ul ol li.red                       | (0,0,1,3)  |
| li.red.level                       | (0,0,2,1)  |
| a1.a2.a3.a4.a5.a6.a7.a8.a9.a10.a11 | (0,0,0,11) |
| #x34y                              | (0,1,0,0)  |
| li:first-child h2 .title           | (0,0,1,3)  |
| #nav .selected > a:hover           | (0,1,2,1)  |
| html body #nav .selected > a:hover | (0,1,2,3)  |

#### CSS伪元素练习

1. plate
2. bento
3. #fancy
4. plate apple
5. #fancy pickle
6. apple.small
7. orange.small
8. bento orange.small
9. plate , bento
10. *
11. plate *
12. plate + apple
13. bento ~ pickle
14. plate > apple
15. plate orange:first-child 
16. plate *:only-child
17. #fancy *:last-child , plate + pickle 
18. plate:nth-child(3) 
19. bento:nth-last-child(3)
20. apple:first-of-type 
21. plate:nth-of-type(2n) 
22. plate:nth-of-type(2n+3) 
23. plate apple.small:only-of-type
24. orange:last-of-type , apple:last-of-type 
25. bento:empty 
26. apple:not(.small) 
27. [for]
28. plate[for]
29. [for="Vitaly"]
30. [for\^="Sam"] , [for\^="Sarah"]
31. [for\$="Hayato"],[for​\$="Minato"]
32. [for\*="Robbie"],[for\*="Bobby"]

​                   



​                             

​            

​          



 