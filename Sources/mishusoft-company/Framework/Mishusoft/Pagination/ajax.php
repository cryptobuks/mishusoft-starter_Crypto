<?php if (isset($this->pagination)) : ?>
    <table class="table">
        <tr>
            <td style="width:100px">
                <div class="text-align-left">Pages <?php echo $this->pagination['current']; ?>
                    of <?php echo $this->pagination['total']; ?>.
                </div>
            </td>
            <td>
                <div class="text-align-center">
                    <div class="pagination"> <?php if ($this->pagination['first']) :
                        ?> <a class="page" data-page="<?php echo $this->pagination['first']; ?>"
                                             <?php else : ?>
                                <a>&#x00AB;</<?php endif; ?> <?php if ($this->pagination['previous']) :
                                    ?> <a
                                    class="page" data-page="<?php echo $this->pagination['previous']; ?>"
                                    href="jav<?php else : ?>
                                <a>&#10094;</<?php endif; ?>  <?php for ($i = 0, $iMax = count($this->pagination['range']); $i < $iMax; $i++) :
                                    ?><?php if ($this->pagination['current'] === $this->pagination['range'][$i]) : ?>
                                <a class="active"><?php echo $this->pagination['range'][$i]; ?></a> <?php
                                    else :
                                        ?> <a
                                    class="page" data-page="<?php echo $this->pagination['range'][$i]; ?>"
                                    href="javascript:void(0)"><?php echo $this->pagination['range'][$i]; ?></a> <?php
                                    endif; ?><?php
                                             endfor; ?>  <?php if ($this->pagination['next']) : ?>
                                <a class="page" data-page="<?php echo $this->pagination['next']; ?>"
                                             <?php else : ?>
                                             <?php endif; ?> <?php if ($this->pagination['last']) :
                                                    ?> <a class="page"
                                                                                                            data-page="<?php echo $this->pagination['last']; ?>"
                                             <?php else : ?>
                                             <?php endif; ?> </a></div>
                </div>
            </td>
        </tr>
<?php endif; ?>