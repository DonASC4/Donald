 cd ~

ASC Guest@DESKTOP-IR8DG9Q MINGW64 ~
$ cd .ssh

ASC Guest@DESKTOP-IR8DG9Q MINGW64 ~/.ssh
$ ssh-keygen -t rsa -b "dpoindexter20@centralcatholichs.com"
Bits has bad value dpoindexter20@centralcatholichs.com (invalid)

ASC Guest@DESKTOP-IR8DG9Q MINGW64 ~/.ssh
$ ssh-keygen -t rsa -b 4096 -C "dpoindexter20@centralcatholichs.com"
Generating public/private rsa key pair.
Enter file in which to save the key (/c/Users/ASC Guest/.ssh/id_rsa):
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in /c/Users/ASC Guest/.ssh/id_rsa.
Your public key has been saved in /c/Users/ASC Guest/.ssh/id_rsa.pub.
The key fingerprint is:
SHA256:TDZ0kk404AwjUmFHH3Ff8uE8DAklTW/rvT0WK7//IGU dpoindexter20@centralcatholichs.com
The key's randomart image is:
+---[RSA 4096]----+
|..=o= ++O**.o    |
| o o * +o*oX .   |
|      +o+ . O    |
|       +.. . o   |
|        S   . E  |
|           . + . |
|            o o o|
|             o B |
|              =oO|
+----[SHA256]-----+

ASC Guest@DESKTOP-IR8DG9Q MINGW64 ~/.ssh
$ clip < id_rsa.pub
