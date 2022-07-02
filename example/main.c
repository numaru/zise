#include "lib1/lib1.h"
#include "lib2/submodule1/submodule1.h"
#include "lib2/submodule2/submodule2.h"

int main(void) {
  lib1_foo();
  lib1_bar();
  submodule1_foo();
  submodule2_bar();

  return 0;
}
