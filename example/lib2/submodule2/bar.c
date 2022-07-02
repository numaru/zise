#include "submodule2.h"

static int submodule2_buffer[256];

void submodule2_bar(void) { submodule2_buffer[0] = 0; }

int submodule2_get(void) { return submodule2_buffer[0]; }
